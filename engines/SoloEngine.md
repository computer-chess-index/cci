# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2847<sub>(+new) | 3121<sub>(+new) | 3227<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2261<sub>(+97) | 2601<sub>(+143) | 2745<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2164<sub>(+150) | 2458<sub>(+135) | 2595<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2014<sub>(+254) | 2323<sub>(+248) | 2433<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1760<sub>(+133) | 2075<sub>(+103) | 2194<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1627<sub>(-24) | 1972<sub>(+19) | 2067<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1651 | 1953 | 2016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-23 06:29:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2164, 2261, 2847]
  line "STC (8.0+0.08s)" [1651, 1627, 1760, 2014, 2164, 2261, 2847]
  line "LTC (60.0+0.60s)" [1953, 1972, 2075, 2323, 2458, 2601, 3121]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2194, 2433, 2595, 2745, 3227]
  line "VLTC (2m24s+1.12s)" [2016, 2067, 2194, 2433, 2595, 2745, 3227]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3227 | 29 | 320 | 50% | 3220 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3121 | 32 | 286 | 53% | 3086 | 52% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2847 | 29 | 366 | 51% | 2832 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 27 | 436 | 52% | 2728 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2601 | 31 | 328 | 49% | 2607 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2261 | 31 | 348 | 52% | 2244 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 34 | 280 | 50% | 2591 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2458 | 32 | 332 | 51% | 2446 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2164 | 35 | 288 | 49% | 2182 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2433 | 30 | 380 | 48% | 2452 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2323 | 37 | 252 | 52% | 2307 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2014 | 35 | 288 | 54% | 1974 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2194 | 36 | 264 | 49% | 2203 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2075 | 40 | 206 | 53% | 2053 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1760 | 43 | 180 | 51% | 1751 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2067 | 40 | 204 | 52% | 2052 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1972 | 46 | 164 | 51% | 1966 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1627 | 42 | 208 | 47% | 1652 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2016 | 38 | 260 | 46% | 2086 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1953 | 43 | 204 | 46% | 2017 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1651 | 41 | 232 | 47% | 1706 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |