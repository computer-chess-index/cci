# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2369<sub>(+227) | 2611<sub>(+227) | 2745<sub>(+253) |  |
| 1.5 | 2026-05-26 | 2142<sub>(+144) | 2384<sub>(+98) | 2492<sub>(+147) |  |
| 1.4 | 2026-04-25 | 1998<sub>(+487) | 2286<sub>(+434) | 2345<sub>(+378) |  |
| 1.3 | 2026-04-11 | 1511<sub>(+new) | 1852<sub>(+new) | 1967<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:25:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1511, 1998, 2142, 2369]
  line "STC (8.0+0.08s)" [1511, 1998, 2142, 2369]
  line "LTC (60.0+0.60s)" [1852, 2286, 2384, 2611]
  line "VLTC (2m24s+1.12s)" [1967, 2345, 2492, 2745]
  line "VLTC (2m24s+1.12s)" [1967, 2345, 2492, 2745]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 32 | 314 | 46% | 2773 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2611 | 34 | 280 | 51% | 2596 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2369 | 36 | 256 | 53% | 2342 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 33 | 314 | 49% | 2498 | 27% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 37 | 242 | 50% | 2385 | 33% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2142 | 34 | 306 | 52% | 2124 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2345 | 29 | 420 | 51% | 2333 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2286 | 31 | 380 | 53% | 2253 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1998 | 30 | 406 | 51% | 1980 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1967 | 34 | 324 | 48% | 1983 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1852 | 32 | 364 | 50% | 1850 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1511 | 31 | 378 | 50% | 1505 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |