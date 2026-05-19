# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2615<sub>(+108) | 2955<sub>(+74) | 3025<sub>(+94) |  |
| 0.30 | 2026-05-01 | 2507<sub>(+15) | 2881<sub>(+120) | 2931<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2492<sub>(+88) | 2761<sub>(+95) | 2839<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2404<sub>(+514) | 2666<sub>(+590) | 2724<sub>(+559) |  |
| 0.08 | 2026-02-05 | 1890 | 2076 | 2165 |  |
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

Generated: 2026-05-19 06:25:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1890, 2404, 2492, 2507, 2615]
  line "STC (8.0+0.08s)" [1890, 2404, 2492, 2507, 2615]
  line "LTC (60.0+0.60s)" [2076, 2666, 2761, 2881, 2955]
  line "VLTC (2m24s+1.12s)" [2165, 2724, 2839, 2931, 3025]
  line "VLTC (2m24s+1.12s)" [2165, 2724, 2839, 2931, 3025]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 30 | 324 | 51% | 3015 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2955 | 31 | 296 | 49% | 2962 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2615 | 33 | 300 | 50% | 2619 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 32 | 304 | 51% | 2924 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 30 | 336 | 49% | 2890 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2507 | 36 | 280 | 50% | 2504 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2839 | 31 | 328 | 51% | 2834 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2761 | 32 | 312 | 50% | 2762 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2492 | 31 | 356 | 51% | 2483 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 36 | 236 | 55% | 2674 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2666 | 36 | 228 | 57% | 2603 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2404 | 37 | 236 | 55% | 2358 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2165 | 28 | 392 | 46% | 2214 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2076 | 29 | 384 | 48% | 2103 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1890 | 31 | 356 | 48% | 1914 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |