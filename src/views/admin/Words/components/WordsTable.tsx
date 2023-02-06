import Table from '@/components/Table';

export default function WordsTable({
  data,
  columns,
}: {
  data: any[];
  columns: any[];
}) {
  return <Table data={data} columns={columns} />;
}
