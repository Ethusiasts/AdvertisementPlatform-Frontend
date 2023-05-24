export default function Header({ title }) {
    return (
        <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center">
        <img className="h-14 w-14 rounded-full object-cover mx-2" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
        </div>
      </div>
        )}