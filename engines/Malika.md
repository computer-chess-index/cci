# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3086<sub>(+54) | 3290<sub>(+57) | 3341<sub>(+32) |  |
| 1.0 | 2026-03-26 | 3032<sub>(+312) | 3233<sub>(+291) | 3309<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2720<sub>(-43) | 2942<sub>(-101) | 2950<sub>(-204) |  |
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

Generated: 2026-05-17 06:25:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2700 --> 3400
  line "STC (8.0+0.08s)" [2763, 2720, 3032, 3086]
  line "STC (8.0+0.08s)" [2763, 2720, 3032, 3086]
  line "LTC (60.0+0.60s)" [3043, 2942, 3233, 3290]
  line "VLTC (2m24s+1.12s)" [3154, 2950, 3309, 3341]
  line "VLTC (2m24s+1.12s)" [3154, 2950, 3309, 3341]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3341 | 32 | 274 | 49% | 3347 | 48% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3290 | 28 | 390 | 47% | 3310 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3086 | 31 | 334 | 52% | 3070 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3309 | 28 | 366 | 50% | 3309 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 29 | 364 | 50% | 3231 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3032 | 29 | 408 | 52% | 3011 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2950 | 35 | 286 | 49% | 2961 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 34 | 288 | 49% | 2950 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2720 | 35 | 292 | 52% | 2699 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 33 | 276 | 50% | 3152 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 3043 | 35 | 244 | 52% | 3025 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2763 | 37 | 228 | 51% | 2753 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |