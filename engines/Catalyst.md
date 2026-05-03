# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2711<sub>(+87) | 3128<sub>(+130) | 3179<sub>(+79) |  |
| 2.2.0 | 2026-04-03 | 2624<sub>(-18) | 2998<sub>(+31) | 3100<sub>(+138) |  |
| 2.1.0 | 2026-04-02 | 2642<sub>(+5) | 2967<sub>(-29) | 2962<sub>(-69) |  |
| 2.0.0 | 2026-03-29 | 2637<sub>(+276) | 2996<sub>(+183) | 3031<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2361 | 2813 | 2923 |  |
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

Generated: 2026-05-03 07:35:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2361, 2637, 2642, 2624, 2711]
  line "STC (8.0+0.08s)" [2361, 2637, 2642, 2624, 2711]
  line "LTC (60.0+0.60s)" [2813, 2996, 2967, 2998, 3128]
  line "VLTC (2m24s+1.12s)" [2923, 3031, 2962, 3100, 3179]
  line "VLTC (2m24s+1.12s)" [2923, 3031, 2962, 3100, 3179]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 38 | 202 | 48% | 3197 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 43 | 150 | 51% | 3124 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2711 | 50 | 128 | 50% | 2712 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 34 | 242 | 51% | 3096 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 35 | 238 | 50% | 2992 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2624 | 34 | 274 | 50% | 2624 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2962 | 31 | 292 | 49% | 2974 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2967 | 34 | 248 | 49% | 2971 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2642 | 35 | 256 | 48% | 2655 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 31 | 288 | 49% | 3038 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2996 | 32 | 280 | 51% | 2988 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2637 | 30 | 336 | 48% | 2653 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 32 | 302 | 49% | 2931 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2813 | 34 | 268 | 48% | 2831 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 35 | 272 | 46% | 2398 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |