import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, className, ...props }) {
        const isSuccess = className?.includes('green') || className?.includes('bg-green')
        const isError = variant === 'destructive' || className?.includes('red') || className?.includes('bg-red')
        
        return (
          <Toast 
            key={id} 
            variant={variant} 
            className={className}
            onClick={() => dismiss(id)}
            {...props}
          >
            <div className="flex items-start gap-3">
              {isSuccess && (
                <CheckCircle2 className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              )}
              {isError && (
                <AlertCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              )}
              <div className="grid gap-1 flex-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
