# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2365<sub>(+241) | 2607<sub>(+234) | 2741<sub>(+260) |  |
| 1.5 | 2026-05-26 | 2124<sub>(+131) | 2373<sub>(+91) | 2481<sub>(+140) |  |
| 1.4 | 2026-04-25 | 1993<sub>(+489) | 2282<sub>(+437) | 2341<sub>(+379) |  |
| 1.3 | 2026-04-11 | 1504<sub>(+new) | 1845<sub>(+new) | 1962<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
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

Generated: 2026-07-29 06:25:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1504, 1993, 2124, 2365]
  line "STC (8.0+0.08s)" [1504, 1993, 2124, 2365]
  line "LTC (60.0+0.60s)" [1845, 2282, 2373, 2607]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2481, 2741]
  line "VLTC (2m24s+1.12s)" [1962, 2341, 2481, 2741]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2741 | 32 | 314 | 46% | 2769 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 34 | 280 | 51% | 2592 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2365 | 36 | 256 | 53% | 2338 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 35 | 278 | 49% | 2493 | 24% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2373 | 39 | 210 | 49% | 2384 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2124 | 39 | 230 | 50% | 2129 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2341 | 29 | 420 | 51% | 2329 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 31 | 380 | 53% | 2248 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1993 | 30 | 406 | 51% | 1974 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 34 | 324 | 48% | 1978 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1845 | 32 | 364 | 50% | 1843 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1504 | 31 | 378 | 50% | 1499 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |