import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card';
import { TabsTrigger, TabsList, TabsContent, Tabs } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const Form = () => {
  const [selectedTab, setSelectedTab] = useState<'step1' | 'step2' | 'step3'>('step1');

  const handleSteps = (moveToStep: number) => {
    switch (moveToStep) {
      case 0:
        setSelectedTab('step1');
        break;
      case 1:
        setSelectedTab('step2');
        break;
      case 2:
        setSelectedTab('step3');
        break;
      default:
        break;
    }
  };

  return (
    <Card className='inline-block max-w-[600px]'>
      <CardHeader>
        <CardTitle>Multi-Step Form</CardTitle>
        <CardDescription>Please fill out the following steps to complete the form.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs className='w-full' defaultValue='step1' value={selectedTab}>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='step1' onClick={() => setSelectedTab('step1')}>
              Step 1
            </TabsTrigger>
            <TabsTrigger value='step2' onClick={() => setSelectedTab('step2')}>
              Step 2
            </TabsTrigger>
            <TabsTrigger value='step3' onClick={() => setSelectedTab('step3')}>
              Step 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value='step1'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='firstName' className='flex justify-start'>
                  First Name
                </Label>
                <Input id='firstName' placeholder='John' required />
              </div>
              <div className='space-y-2'>
                <Label className='flex justify-start' htmlFor='lastName'>
                  Last Name
                </Label>
                <Input id='lastName' placeholder='Doe' required />
              </div>
            </div>
            <div className='flex justify-end'>
              {/* On click, will trigger tab change */}
              <Button className='mt-4' onClick={() => handleSteps(1)}>
                Next
              </Button>
            </div>
          </TabsContent>
          <TabsContent value='step2'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label className='flex justify-start' htmlFor='email'>
                  Email
                </Label>
                <Input id='email' placeholder='example@example.com' required type='email' />
              </div>
              <div className='space-y-2'>
                <Label className='flex justify-start' htmlFor='phone'>
                  Phone Number
                </Label>
                <Input id='phone' placeholder='(123) 456-7890' required />
              </div>
            </div>
            <div className='flex justify-between'>
              <Button className='mt-4' onClick={() => handleSteps(0)}>
                Previous
              </Button>
              <Button className='mt-4' onClick={() => handleSteps(2)}>
                Next
              </Button>
            </div>
          </TabsContent>
          <TabsContent value='step3'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label className='flex justify-start' htmlFor='password'>
                  Password
                </Label>
                <Input id='password' required type='password' />
              </div>
              <div className='space-y-2'>
                <Label className='flex justify-start' htmlFor='confirmPassword'>
                  Confirm Password
                </Label>
                <Input id='confirmPassword' required type='password' />
              </div>
            </div>
            <div className='flex justify-between'>
              <Button className='mt-4' onClick={() => handleSteps(1)}>
                Previous
              </Button>
              <Button className='mt-4' type='submit'>
                Submit
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
