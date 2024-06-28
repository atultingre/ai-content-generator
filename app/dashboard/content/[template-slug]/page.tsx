"use client";
import React from 'react'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PROPS {
  params: {
    'template-slug': string
  }
}

const CreateNewContent = (props: PROPS) => {

  console.log("template", props.params['template-slug'])

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])

  const GenerateAIContent = (formData: any) => {

  }

  return (
    <div>
      <div className='p-5 flex justify-between'>
        <Link href={"/dashboard"}>
          <Button className='text-md'> <ArrowLeft className='w-4 h-4'/> Back</Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 col-gap-5 p-5 md:gap-5 gap-y-4'>
        <div className='mb-5 md:mb-0'>
          <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} />
        </div>
        <div className='col-span-2
      '>
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent