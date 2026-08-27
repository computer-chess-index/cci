# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2658<sub>(+84) | 3079<sub>(+128) | 3132<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2574<sub>(-18) | 2951<sub>(+31) | 3052<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2592<sub>(+5) | 2920<sub>(-28) | 2916<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2587<sub>(+276) | 2948<sub>(+183) | 2984<sub>(+110) |  |
| 1.0.0 | 2026-03-26 | 2311 | 2765 | 2874 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-27 06:23:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2311, 2587, 2592, 2574, 2658]
  line "STC (8.0+0.08s)" [2311, 2587, 2592, 2574, 2658]
  line "LTC (60.0+0.60s)" [2765, 2948, 2920, 2951, 3079]
  line "VLTC (2m24s+1.12s)" [2874, 2984, 2916, 3052, 3132]
  line "VLTC (2m24s+1.12s)" [2874, 2984, 2916, 3052, 3132]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3132 | 38 | 202 | 48% | 3150 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3079 | 43 | 150 | 51% | 3075 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2658 | 50 | 128 | 50% | 2660 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 34 | 242 | 51% | 3047 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2951 | 35 | 238 | 50% | 2946 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2574 | 34 | 274 | 50% | 2574 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 31 | 292 | 49% | 2927 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 34 | 248 | 49% | 2924 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2592 | 35 | 256 | 48% | 2606 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2984 | 31 | 288 | 49% | 2990 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 32 | 280 | 51% | 2940 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2587 | 30 | 336 | 48% | 2601 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 32 | 302 | 49% | 2884 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2765 | 34 | 268 | 48% | 2782 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2311 | 35 | 272 | 46% | 2348 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |