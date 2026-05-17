# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-04-23 | 2716<sub>(+86) | 3133<sub>(+128) | 3185<sub>(+79) |  |
| 2.2.0 | 2026-04-03 | 2630<sub>(-17) | 3005<sub>(+32) | 3106<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2647<sub>(+5) | 2973<sub>(-29) | 2969<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2642<sub>(+277) | 3002<sub>(+183) | 3036<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2365 | 2819 | 2928 |  |
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

Generated: 2026-05-17 06:23:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2365, 2642, 2647, 2630, 2716]
  line "STC (8.0+0.08s)" [2365, 2642, 2647, 2630, 2716]
  line "LTC (60.0+0.60s)" [2819, 3002, 2973, 3005, 3133]
  line "VLTC (2m24s+1.12s)" [2928, 3036, 2969, 3106, 3185]
  line "VLTC (2m24s+1.12s)" [2928, 3036, 2969, 3106, 3185]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 38 | 202 | 48% | 3202 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 43 | 150 | 51% | 3129 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2716 | 50 | 128 | 50% | 2718 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3106 | 34 | 242 | 51% | 3101 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3005 | 35 | 238 | 50% | 2998 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2630 | 34 | 274 | 50% | 2630 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 31 | 292 | 49% | 2979 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2973 | 34 | 248 | 49% | 2977 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2647 | 35 | 256 | 48% | 2661 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3036 | 31 | 288 | 49% | 3043 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 32 | 280 | 51% | 2993 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2642 | 30 | 336 | 48% | 2658 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2928 | 32 | 302 | 49% | 2938 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2819 | 34 | 268 | 48% | 2836 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2365 | 35 | 272 | 46% | 2402 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |