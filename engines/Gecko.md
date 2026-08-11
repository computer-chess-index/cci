# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2666<sub>(+65) | 2965<sub>(+29) | 3036<sub>(+20) |  |
| 0.35 | 2026-05-13 | 2601<sub>(+112) | 2936<sub>(+70) | 3016<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2489<sub>(+16) | 2866<sub>(+121) | 2916<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2473<sub>(+89) | 2745<sub>(+96) | 2824<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2384<sub>(+514) | 2649<sub>(+594) | 2708<sub>(+563) |  |
| 0.08 | 2026-02-05 | 1870 | 2055 | 2145 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-11 06:25:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1870, 2384, 2473, 2489, 2601, 2666]
  line "STC (8.0+0.08s)" [1870, 2384, 2473, 2489, 2601, 2666]
  line "LTC (60.0+0.60s)" [2055, 2649, 2745, 2866, 2936, 2965]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2916, 3016, 3036]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2824, 2916, 3016, 3036]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3036 | 29 | 346 | 51% | 3023 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2965 | 29 | 370 | 49% | 2975 | 41% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2666 | 29 | 384 | 50% | 2669 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 28 | 388 | 51% | 3008 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 30 | 324 | 49% | 2946 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2601 | 31 | 340 | 50% | 2603 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 32 | 304 | 51% | 2909 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 336 | 49% | 2876 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2489 | 36 | 280 | 50% | 2487 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 31 | 328 | 51% | 2819 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 312 | 50% | 2746 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2473 | 31 | 356 | 51% | 2464 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2657 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 36 | 228 | 57% | 2585 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2384 | 37 | 236 | 55% | 2338 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 28 | 392 | 46% | 2194 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1870 | 31 | 356 | 48% | 1893 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |