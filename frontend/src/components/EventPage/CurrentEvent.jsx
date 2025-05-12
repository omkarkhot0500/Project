import React from "react";

function CurrentEvents() {
  return (
    <main className="flex flex-col items-center text-lg font-bold leading-none text-black">
      <Random />
      <h1 className="mt-5 text-6xl leading-none max-md:max-w-full max-md:text-4xl">
        Current Events
      </h1>
      <EventList />
    </main>
  );
}

function Random() {
  return (
    <header className="self-stretch">
      <h2 className="gap-2.5 px-5 py-2.5 bg-amber-600 rounded-3xl text-neutral-100">
        Random Text
      </h2>
    </header>
  );
}

function EventList() {
  return (
    <section className="gap-2.5 self-stretch px-2.5 py-4 mt-5 w-full text-center rounded-xl bg-neutral-100 max-md:max-w-full">
      No Current Events! Come Back Later
    </section>
  );
}

export default CurrentEvents;
