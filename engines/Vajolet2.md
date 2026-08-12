# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2847<sub>(+31) | 3116<sub>(+78) | 3160<sub>(+43) |  |
| 3.1 | 2026-04-03 | 2816<sub>(+100) | 3038<sub>(+59) | 3117<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2716 | 2979 | 3055 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:23:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2716, 2816, 2847]
  line "STC (8.0+0.08s)" [2716, 2816, 2847]
  line "LTC (60.0+0.60s)" [2979, 3038, 3116]
  line "VLTC (2m24s+1.12s)" [3055, 3117, 3160]
  line "VLTC (2m24s+1.12s)" [3055, 3117, 3160]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 29 | 338 | 49% | 3171 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 29 | 356 | 51% | 3109 | 47% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2847 | 27 | 428 | 50% | 2849 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 29 | 352 | 50% | 3119 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3038 | 27 | 406 | 50% | 3036 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2816 | 28 | 384 | 50% | 2813 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 31 | 318 | 52% | 3038 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 29 | 344 | 52% | 2959 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2716 | 29 | 386 | 52% | 2685 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |