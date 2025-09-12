'use client'

import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { NOTIFICATION_TYPES } from '../contexts/NotificationContext'

const icons = {
  [NOTIFICATION_TYPES.SUCCESS]: <CheckCircleIcon className="size-6 text-green-400" aria-hidden="true" />,
  [NOTIFICATION_TYPES.ERROR]: <ExclamationCircleIcon className="size-6 text-red-400" aria-hidden="true" />,
  [NOTIFICATION_TYPES.WARNING]: <ExclamationTriangleIcon className="size-6 text-yellow-400" aria-hidden="true" />,
  [NOTIFICATION_TYPES.INFO]: <InformationCircleIcon className="size-6 text-blue-400" aria-hidden="true" />
};

export default function Notification({ notification, onDismiss }) {
  const { id, title, message, type = NOTIFICATION_TYPES.INFO } = notification;
  
  return (
    <Transition
      show={true}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="shrink-0">
              {icons[type]}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              {title && <p className="text-sm font-medium text-gray-900">{title}</p>}
              <p className="mt-1 text-sm text-gray-500">{message}</p>
            </div>
            <div className="ml-4 flex shrink-0">
              <button
                type="button"
                onClick={() => onDismiss(id)}
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
