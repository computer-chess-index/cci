# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3075<sub>(+46) | 3298<sub>(+66) | 3340<sub>(+34) |  |
| 1.0 | 2026-03-26 | 3029<sub>(+311) | 3232<sub>(+293) | 3306<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2718<sub>(-44) | 2939<sub>(-103) | 2947<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2762 | 3042 | 3152 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Malika+<version>&body=###%20Engine%20name%0AMalika%0A%0A###%20Version%0A1.116" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-14 06:25:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2700 --> 3400
  line "STC (8.0+0.08s)" [2762, 2718, 3029, 3075]
  line "STC (8.0+0.08s)" [2762, 2718, 3029, 3075]
  line "LTC (60.0+0.60s)" [3042, 2939, 3232, 3298]
  line "VLTC (2m24s+1.12s)" [3152, 2947, 3306, 3340]
  line "VLTC (2m24s+1.12s)" [3152, 2947, 3306, 3340]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3340 | 42 | 160 | 49% | 3345 | 54% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3298 | 33 | 278 | 47% | 3320 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3075 | 36 | 244 | 53% | 3050 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3306 | 28 | 366 | 50% | 3306 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 29 | 364 | 50% | 3229 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3029 | 29 | 408 | 52% | 3008 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 35 | 286 | 49% | 2958 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 34 | 288 | 49% | 2947 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2718 | 35 | 292 | 52% | 2696 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3152 | 33 | 276 | 50% | 3150 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 3042 | 35 | 244 | 52% | 3023 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2762 | 37 | 228 | 51% | 2750 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |