import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const items = this.props.benches.map(bench => {
      return <BenchIndexItem key={bench.id} bench={bench} />;
    });

    return (
      <div>
        {items}
      </div>
    );
  }

}

export default BenchIndex;
