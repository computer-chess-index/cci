# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2712<sub>(+86) | 3129<sub>(+128) | 3181<sub>(+79) |  |
| 2.2.0 | 2026-04-03 | 2626<sub>(-17) | 3001<sub>(+32) | 3102<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2643<sub>(+5) | 2969<sub>(-28) | 2965<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2638<sub>(+277) | 2997<sub>(+182) | 3032<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2361 | 2815 | 2924 |  |
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

Generated: 2026-05-08 06:23:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2361, 2638, 2643, 2626, 2712]
  line "STC (8.0+0.08s)" [2361, 2638, 2643, 2626, 2712]
  line "LTC (60.0+0.60s)" [2815, 2997, 2969, 3001, 3129]
  line "VLTC (2m24s+1.12s)" [2924, 3032, 2965, 3102, 3181]
  line "VLTC (2m24s+1.12s)" [2924, 3032, 2965, 3102, 3181]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 38 | 202 | 48% | 3198 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 43 | 150 | 51% | 3125 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2712 | 50 | 128 | 50% | 2714 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 34 | 242 | 51% | 3097 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3001 | 35 | 238 | 50% | 2994 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2626 | 34 | 274 | 50% | 2626 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2965 | 31 | 292 | 49% | 2975 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2969 | 34 | 248 | 49% | 2973 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2643 | 35 | 256 | 48% | 2657 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3032 | 31 | 288 | 49% | 3039 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2997 | 32 | 280 | 51% | 2989 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2638 | 30 | 336 | 48% | 2654 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2924 | 32 | 302 | 49% | 2934 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2815 | 34 | 268 | 48% | 2832 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2361 | 35 | 272 | 46% | 2398 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |