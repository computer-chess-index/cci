# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2369<sub>(+235) | 2610<sub>(+223) | 2743<sub>(+252) |  |
| 1.5 | 2026-05-26 | 2134<sub>(+136) | 2387<sub>(+103) | 2491<sub>(+147) |  |
| 1.4 | 2026-04-25 | 1998<sub>(+487) | 2284<sub>(+433) | 2344<sub>(+378) |  |
| 1.3 | 2026-04-11 | 1511<sub>(+new) | 1851<sub>(+new) | 1966<sub>(+new) |  |
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

Generated: 2026-08-18 06:24:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1511, 1998, 2134, 2369]
  line "STC (8.0+0.08s)" [1511, 1998, 2134, 2369]
  line "LTC (60.0+0.60s)" [1851, 2284, 2387, 2610]
  line "VLTC (2m24s+1.12s)" [1966, 2344, 2491, 2743]
  line "VLTC (2m24s+1.12s)" [1966, 2344, 2491, 2743]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 32 | 314 | 46% | 2770 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2610 | 34 | 280 | 51% | 2596 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2369 | 36 | 256 | 53% | 2342 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2491 | 33 | 310 | 49% | 2496 | 27% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2387 | 37 | 238 | 51% | 2384 | 32% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2134 | 35 | 294 | 51% | 2122 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2344 | 29 | 420 | 51% | 2331 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2284 | 31 | 380 | 53% | 2252 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1998 | 30 | 406 | 51% | 1979 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1966 | 34 | 324 | 48% | 1982 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1851 | 32 | 364 | 50% | 1848 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1511 | 31 | 378 | 50% | 1505 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |