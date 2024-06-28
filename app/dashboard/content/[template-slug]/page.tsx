"use client";
import React, { useState } from 'react'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModel';

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {
  const [loading,setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('');

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])

  const GenerateAIContent = async (formData: any) => {
    setLoading(true)
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    setAiOutput(result.response.text());
    setLoading(false)
  }

  return (
    <div>
      <div className='p-5 flex justify-between'>
        <Link href={"/dashboard"}>
          <Button className='text-md'> <ArrowLeft className='w-4 h-4' /> Back</Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 col-gap-5 p-5 md:gap-5 gap-y-4'>
        <div className='mb-5 md:mb-0'>
          <FormSection 
            selectedTemplate={selectedTemplate} 
            userFormInput={(v: any) => GenerateAIContent(v)} 
            loading={loading} 
          />
        </div>
        <div className='col-span-2
      '>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent