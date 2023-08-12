'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { UserValidation } from '@/lib/validations/user'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'

interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string,
}

const AccountProfile: React.FC<Props> = ({ user, btnTitle }) => {
  
  const [files, setFiles] = useState<File[]>([])
  
  console.log(files)

    const onSubmit = (data: z.infer<typeof UserValidation>) => {
        console.log(data)
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => { 
      e.preventDefault()
      const reader = new FileReader()
      if(e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0]
        setFiles([...files, file])
        if (!file.type.includes('image')) return
        const f = reader.readAsDataURL(file)
        console.log(f)
        reader.onload = () => {
          onChange(reader.result as string)
        }
      }
    }
    
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || '',
            name: user?.name || '',
            username: user?.username || '',
            bio: user?.bio || '',
        }
    })

    return (
    <Form {...form}>
      <form className='flex flex-col justify-start gap-10' onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (
                    <Image
                      src={field.value}
                      alt="Profile photo"
                      width={96}
                      height={96}
                      priority
                      className='rounded-full object-contain'
                    />
                ):(<Image
                      src='/assets/profile.svg'
                      alt="Profile photo"
                      width={24}
                      height={24}
                      className='object-contain'
                    />)}
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                    type='file'
                    accept='image/*'
                    placeholder='Upload a photo'
                    className='account-form_image-input cursor-pointer'
                    onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-4'>
              <FormLabel className='text-base-semibold text-light-2'>
                Username
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                    type='text'
                    placeholder='Enter your name'
                    className='account-form_input no-focus'
                    {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-4'>
              <FormLabel className='text-base-semibold text-light-2'>
                Bio
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Textarea
                    placeholder='Enter your bio'
                    className='account-form_input no-focus'
                    rows={10}
                    {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AccountProfile