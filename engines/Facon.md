# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2363<sub>(+242) | 2606<sub>(+234) | 2738<sub>(+253) |  |
| 1.5 | 2026-05-26 | 2121<sub>(+128) | 2372<sub>(+93) | 2485<sub>(+147) |  |
| 1.4 | 2026-04-25 | 1993<sub>(+488) | 2279<sub>(+432) | 2338<sub>(+376) |  |
| 1.3 | 2026-04-11 | 1505<sub>(+new) | 1847<sub>(+new) | 1962<sub>(+new) |  |
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

Generated: 2026-08-12 07:49:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1505, 1993, 2121, 2363]
  line "STC (8.0+0.08s)" [1505, 1993, 2121, 2363]
  line "LTC (60.0+0.60s)" [1847, 2279, 2372, 2606]
  line "VLTC (2m24s+1.12s)" [1962, 2338, 2485, 2738]
  line "VLTC (2m24s+1.12s)" [1962, 2338, 2485, 2738]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2738 | 32 | 314 | 46% | 2766 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2606 | 34 | 280 | 51% | 2591 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2363 | 36 | 256 | 53% | 2336 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2485 | 34 | 302 | 49% | 2491 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2372 | 38 | 226 | 50% | 2379 | 32% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2121 | 36 | 282 | 50% | 2118 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2338 | 29 | 420 | 51% | 2326 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2279 | 31 | 380 | 53% | 2246 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1993 | 30 | 406 | 51% | 1974 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1847 | 32 | 364 | 50% | 1844 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1505 | 31 | 378 | 50% | 1500 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |