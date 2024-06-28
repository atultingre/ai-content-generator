"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface PROPS {
  selectedTemplate?: TEMPLATE,
  userFormInput:any
}

function FormSection({ selectedTemplate }: PROPS) {

  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    userFormInput(formData)
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white sm:mb-5'>
      <Image src={selectedTemplate?.icon} width={70} height={70} alt={selectedTemplate?.name} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className='my-2 flex gap-2 flex-col mb-7'>
            <label htmlFor="" className='font-bold'>{item.label}</label>
            {item.field == 'input' ? <Input name={item.name} required={item?.required} onChange={handleInputChange} /> : item.field == 'textarea' ? <Textarea name={item.name} required={item?.required} onChange={handleInputChange} /> : null}
          </div>
        ))}
        <Button className='w-full py-6' type='submit'>Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection