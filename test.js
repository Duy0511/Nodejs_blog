function findSubarraysWithSum(m, n) {
    const result = [];
    const subarraySums = [];
    let count = 0

    function findSubarraysHelper(index, currentSum, subarray) {
        console.log(`${index} + ${currentSum} + ${subarray}`)
        // console.log(currentSum)
        if (currentSum === n) {
            result.push(subarray.slice()); // Thêm một bản sao của dãy con đã tìm thấy vào kết quả
            subarraySums.push(currentSum); // Lưu tổng của dãy con vào mảng subarraySums
        }

        if (index >= m.length || currentSum >= n) {
            return;
        }
        // Thử thêm một phần tử vào dãy con và tiếp tục đệ quy
        findSubarraysHelper(index + 1, currentSum + m[index], subarray.concat(m[index])); // con cai nay no lap tuan tu >11 thi den cai con no se bo di va thay 1 phan tu moi

        // Bỏ qua phần tử hiện tại và tiếp tục đệ quy
        findSubarraysHelper(index + 1, currentSum, subarray); // khi ma no thay >n thi no se lap phan tu tiep bo qua phan tu hien tai
    }

    findSubarraysHelper(0, 0, []);

    // In ra kết quả
    for (let i = 0; i < result.length; i++) {
        console.log(`N = ${n} = ${result[i].join(' + ')}`);
    }
}

const m = [1, 4, 6, 3, 2, 2, 8];
const n = 10;

findSubarraysWithSum(m, n);
