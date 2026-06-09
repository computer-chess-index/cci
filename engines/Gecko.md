# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2599<sub>(+108) | 2934<sub>(+72) | 3011<sub>(+99) |  |
| 0.30 | 2026-05-01 | 2491<sub>(+16) | 2862<sub>(+120) | 2912<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2475<sub>(+88) | 2742<sub>(+95) | 2820<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2387<sub>(+516) | 2647<sub>(+591) | 2705<sub>(+558) |  |
| 0.08 | 2026-02-05 | 1871 | 2056 | 2147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-09 06:24:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1871, 2387, 2475, 2491, 2599]
  line "STC (8.0+0.08s)" [1871, 2387, 2475, 2491, 2599]
  line "LTC (60.0+0.60s)" [2056, 2647, 2742, 2862, 2934]
  line "VLTC (2m24s+1.12s)" [2147, 2705, 2820, 2912, 3011]
  line "VLTC (2m24s+1.12s)" [2147, 2705, 2820, 2912, 3011]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3011 | 28 | 384 | 51% | 3002 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 30 | 320 | 49% | 2940 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2599 | 32 | 328 | 50% | 2600 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2912 | 32 | 304 | 51% | 2904 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2862 | 30 | 336 | 49% | 2871 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2491 | 36 | 280 | 50% | 2487 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 31 | 328 | 51% | 2815 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2742 | 32 | 312 | 50% | 2743 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2475 | 31 | 356 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2705 | 36 | 236 | 55% | 2655 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 36 | 228 | 57% | 2584 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2387 | 37 | 236 | 55% | 2341 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2147 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1871 | 31 | 356 | 48% | 1895 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |