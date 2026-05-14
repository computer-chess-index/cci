# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2714<sub>(+86) | 3132<sub>(+130) | 3182<sub>(+77) |  |
| 2.2.0 | 2026-04-03 | 2628<sub>(-17) | 3002<sub>(+32) | 3105<sub>(+139) |  |
| 2.1.0 | 2026-04-02 | 2645<sub>(+6) | 2970<sub>(-30) | 2966<sub>(-69) |  |
| 2.0.0 | 2026-03-29 | 2639<sub>(+276) | 3000<sub>(+184) | 3035<sub>(+110) |  |
| 1.0.0 | 2026-03-26 | 2363 | 2816 | 2925 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-14 06:23:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2363, 2639, 2645, 2628, 2714]
  line "STC (8.0+0.08s)" [2363, 2639, 2645, 2628, 2714]
  line "LTC (60.0+0.60s)" [2816, 3000, 2970, 3002, 3132]
  line "VLTC (2m24s+1.12s)" [2925, 3035, 2966, 3105, 3182]
  line "VLTC (2m24s+1.12s)" [2925, 3035, 2966, 3105, 3182]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 38 | 202 | 48% | 3201 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 43 | 150 | 51% | 3128 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2714 | 50 | 128 | 50% | 2715 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3105 | 34 | 242 | 51% | 3100 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 35 | 238 | 50% | 2996 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2628 | 34 | 274 | 50% | 2627 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2966 | 31 | 292 | 49% | 2978 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2970 | 34 | 248 | 49% | 2974 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2645 | 35 | 256 | 48% | 2658 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3035 | 31 | 288 | 49% | 3042 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3000 | 32 | 280 | 51% | 2992 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2639 | 30 | 336 | 48% | 2655 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2925 | 32 | 302 | 49% | 2935 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2816 | 34 | 268 | 48% | 2834 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2363 | 35 | 272 | 46% | 2399 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |