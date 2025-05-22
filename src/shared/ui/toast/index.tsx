import type { ToastOptions } from '@/@types/toast'
import type { ToastServiceMethods } from 'primevue/toastservice'

let toastInstance: ToastServiceMethods | null = null

export function setAppToast(instance: ToastServiceMethods) {
  toastInstance = instance
}

export const appToast = {
  success: (options: ToastOptions) => {
    toastInstance?.add({
      severity: 'success',
      summary: options.title,
      detail: options.description,
      life: options.duration || 3500,
    })
  },
  error: (options: ToastOptions) => {
    toastInstance?.add({
      severity: 'error',
      summary: options.title,
      detail: options.description,
      life: options.duration || 3500,
    })
  },
  info: (options: ToastOptions) => {
    toastInstance?.add({
      severity: 'info',
      summary: options.title,
      detail: options.description,
      life: options.duration || 3500,
    })
  },
  warning: (options: ToastOptions) => {
    toastInstance?.add({
      severity: 'warn',
      summary: options.title,
      detail: options.description,
      life: options.duration || 3500,
    })
  },
}
