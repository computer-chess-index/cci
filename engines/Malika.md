# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3087<sub>(+56) | 3293<sub>(+60) | 3341<sub>(+33) |  |
| 1.0 | 2026-03-26 | 3031<sub>(+311) | 3233<sub>(+293) | 3308<sub>(+360) |  |
| 0.892 | 2026-02-23 | 2720<sub>(-43) | 2940<sub>(-103) | 2948<sub>(-206) |  |
| 0.418 | 2026-02-07 | 2763 | 3043 | 3154 |  |
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

Generated: 2026-05-16 06:25:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2700 --> 3400
  line "STC (8.0+0.08s)" [2763, 2720, 3031, 3087]
  line "STC (8.0+0.08s)" [2763, 2720, 3031, 3087]
  line "LTC (60.0+0.60s)" [3043, 2940, 3233, 3293]
  line "VLTC (2m24s+1.12s)" [3154, 2948, 3308, 3341]
  line "VLTC (2m24s+1.12s)" [3154, 2948, 3308, 3341]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3341 | 34 | 248 | 49% | 3345 | 48% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3293 | 28 | 370 | 48% | 3312 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3087 | 31 | 326 | 52% | 3067 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3308 | 28 | 366 | 50% | 3308 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 29 | 364 | 50% | 3231 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3031 | 29 | 408 | 52% | 3009 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2948 | 35 | 286 | 49% | 2961 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 34 | 288 | 49% | 2948 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2720 | 35 | 292 | 52% | 2697 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 33 | 276 | 50% | 3151 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 3043 | 35 | 244 | 52% | 3024 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2763 | 37 | 228 | 51% | 2753 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |