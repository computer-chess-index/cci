# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3079<sub>(+54) | 3283<sub>(+56) | 3335<sub>(+34) |  |
| 1.0 | 2026-03-26 | 3025<sub>(+310) | 3227<sub>(+292) | 3301<sub>(+358) |  |
| 0.892 | 2026-02-23 | 2715<sub>(-43) | 2935<sub>(-103) | 2943<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2758 | 3038 | 3147 |  |
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

Generated: 2026-05-18 06:25:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2700 --> 3400
  line "STC (8.0+0.08s)" [2758, 2715, 3025, 3079]
  line "STC (8.0+0.08s)" [2758, 2715, 3025, 3079]
  line "LTC (60.0+0.60s)" [3038, 2935, 3227, 3283]
  line "VLTC (2m24s+1.12s)" [3147, 2943, 3301, 3335]
  line "VLTC (2m24s+1.12s)" [3147, 2943, 3301, 3335]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3335 | 32 | 274 | 49% | 3340 | 48% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3283 | 27 | 398 | 48% | 3302 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3079 | 31 | 334 | 52% | 3063 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3301 | 28 | 366 | 50% | 3302 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3227 | 29 | 364 | 50% | 3224 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3025 | 29 | 408 | 52% | 3004 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2943 | 35 | 286 | 49% | 2955 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 34 | 288 | 49% | 2943 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2715 | 35 | 292 | 52% | 2692 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3147 | 33 | 276 | 50% | 3146 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 3038 | 35 | 244 | 52% | 3019 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2758 | 37 | 228 | 51% | 2747 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |