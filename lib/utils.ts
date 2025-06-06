import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export function formatDate(date: string | Date): string {
  const dateObject = typeof date === 'string' ? new Date(date) : date
  return format(dateObject, 'yyyy年MM月dd日', { locale: zhCN })
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
} 