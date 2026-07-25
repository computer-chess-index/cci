# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2171<sub>(+137) | 2422<sub>(+111) | 2475<sub>(+87) |  |
| 1.4.1 | 2026-04-11 | 2034<sub>(-40) | 2311<sub>(+29) | 2388<sub>(+13) |  |
| 1.4.0 | 2026-04-09 | 2074<sub>(+new) | 2282<sub>(+new) | 2375<sub>(+new) |  |
| 1.3.0 | 2023-10-22 |  |  |  |  |
| 1.2.0 | 2023-09-29 |  |  |  |  |
| 1.1.0 | 2023-08-17 |  |  |  |  |
| 1.0.0 | 2022-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-25 06:29:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2074, 2034, 2171]
  line "STC (8.0+0.08s)" [2074, 2034, 2171]
  line "LTC (60.0+0.60s)" [2282, 2311, 2422]
  line "VLTC (2m24s+1.12s)" [2375, 2388, 2475]
  line "VLTC (2m24s+1.12s)" [2375, 2388, 2475]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2475 | 27 | 448 | 50% | 2475 | 35% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2422 | 27 | 460 | 51% | 2414 | 32% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2171 | 27 | 492 | 46% | 2201 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 33 | 292 | 50% | 2384 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 34 | 296 | 50% | 2309 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2034 | 34 | 302 | 51% | 2021 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 40 | 216 | 47% | 2403 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 39 | 226 | 53% | 2257 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2074 | 43 | 184 | 50% | 2070 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |