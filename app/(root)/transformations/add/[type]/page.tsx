import Header from '@/components/Shared/Header';
import React from 'react';
import { transformationTypes } from '@/constants';
import TransformationForm from '@/components/Shared/TransformationForm';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();

  if (!userId) return redirect('/sign-in');

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={transformation.config}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
