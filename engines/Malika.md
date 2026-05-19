# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3038<sub>(+54) | 3241<sub>(+56) | 3293<sub>(+33) |  |
| 1.0 | 2026-03-26 | 2984<sub>(+311) | 3185<sub>(+292) | 3260<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2673<sub>(-43) | 2893<sub>(-101) | 2901<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2716 | 2994 | 3105 |  |
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

Generated: 2026-05-19 06:26:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2716, 2673, 2984, 3038]
  line "STC (8.0+0.08s)" [2716, 2673, 2984, 3038]
  line "LTC (60.0+0.60s)" [2994, 2893, 3185, 3241]
  line "VLTC (2m24s+1.12s)" [3105, 2901, 3260, 3293]
  line "VLTC (2m24s+1.12s)" [3105, 2901, 3260, 3293]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 32 | 278 | 49% | 3298 | 48% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 27 | 398 | 48% | 3260 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3038 | 31 | 334 | 52% | 3021 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 28 | 366 | 50% | 3260 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3185 | 29 | 364 | 50% | 3183 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2984 | 29 | 408 | 52% | 2962 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2901 | 35 | 286 | 49% | 2913 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2893 | 34 | 288 | 49% | 2901 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2673 | 35 | 292 | 52% | 2651 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3105 | 33 | 276 | 50% | 3104 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 35 | 244 | 52% | 2977 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2716 | 37 | 228 | 51% | 2705 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |