# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3020<sub>(+57) | 3222<sub>(+56) | 3270<sub>(+30) |  |
| 1.0 | 2026-03-26 | 2963<sub>(+309) | 3166<sub>(+292) | 3240<sub>(+358) |  |
| 0.892 | 2026-02-23 | 2654<sub>(-43) | 2874<sub>(-101) | 2882<sub>(-203) |  |
| 0.418 | 2026-02-07 | 2697 | 2975 | 3085 |  |
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

Generated: 2026-06-10 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2697, 2654, 2963, 3020]
  line "STC (8.0+0.08s)" [2697, 2654, 2963, 3020]
  line "LTC (60.0+0.60s)" [2975, 2874, 3166, 3222]
  line "VLTC (2m24s+1.12s)" [3085, 2882, 3240, 3270]
  line "VLTC (2m24s+1.12s)" [3085, 2882, 3240, 3270]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 30 | 322 | 49% | 3276 | 48% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 27 | 418 | 48% | 3239 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3020 | 29 | 382 | 51% | 3008 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 28 | 366 | 50% | 3240 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 29 | 364 | 50% | 3163 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2963 | 29 | 408 | 52% | 2942 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2882 | 35 | 286 | 49% | 2893 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2874 | 34 | 288 | 49% | 2882 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2654 | 35 | 292 | 52% | 2633 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 33 | 276 | 50% | 3083 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2975 | 35 | 244 | 52% | 2957 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2697 | 37 | 228 | 51% | 2687 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |