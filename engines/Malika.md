# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3021<sub>(+56) | 3225<sub>(+59) | 3270<sub>(+29) |  |
| 1.0 | 2026-03-26 | 2965<sub>(+310) | 3166<sub>(+292) | 3241<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2655<sub>(-44) | 2874<sub>(-101) | 2882<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2699 | 2975 | 3086 |  |
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

Generated: 2026-06-08 06:25:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2699, 2655, 2965, 3021]
  line "STC (8.0+0.08s)" [2699, 2655, 2965, 3021]
  line "LTC (60.0+0.60s)" [2975, 2874, 3166, 3225]
  line "VLTC (2m24s+1.12s)" [3086, 2882, 3241, 3270]
  line "VLTC (2m24s+1.12s)" [3086, 2882, 3241, 3270]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 30 | 318 | 49% | 3278 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3225 | 27 | 414 | 48% | 3240 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3021 | 30 | 362 | 52% | 3005 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3241 | 28 | 366 | 50% | 3241 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 29 | 364 | 50% | 3164 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2965 | 29 | 408 | 52% | 2943 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2882 | 35 | 286 | 49% | 2894 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2874 | 34 | 288 | 49% | 2882 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2655 | 35 | 292 | 52% | 2633 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3086 | 33 | 276 | 50% | 3083 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2975 | 35 | 244 | 52% | 2958 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2699 | 37 | 228 | 51% | 2687 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |