import React from 'react'

export const CardComponents = () => {
    return (
        <div>
            <div
                class="max-w-sm m-4 block rounded-lg bg-slate-500">
                <div class="p-6">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Heading
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        write your sample content here...
                    </p>

                    <button
                        type="button"
                        class="inline-block rounded-lg px-4 py-2 font-medium text-white bg-blue-700 hover:bg-blue-500">
                        Button
                    </button>
                </div>
            </div>

        </div>
    )
}
