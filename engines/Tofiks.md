# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2180<sub>(+137) | 2429<sub>(+112) | 2473<sub>(+79) |  |
| 1.4.1 | 2026-04-11 | 2043<sub>(-39) | 2317<sub>(+29) | 2394<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2082 | 2288 | 2380 |  |
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

Generated: 2026-08-23 06:29:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2082, 2043, 2180]
  line "STC (8.0+0.08s)" [2082, 2043, 2180]
  line "LTC (60.0+0.60s)" [2288, 2317, 2429]
  line "VLTC (2m24s+1.12s)" [2380, 2394, 2473]
  line "VLTC (2m24s+1.12s)" [2380, 2394, 2473]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 25 | 500 | 49% | 2479 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 26 | 492 | 51% | 2421 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2180 | 26 | 536 | 47% | 2202 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2394 | 33 | 292 | 50% | 2391 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2317 | 34 | 296 | 50% | 2315 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2043 | 34 | 302 | 51% | 2029 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 40 | 216 | 47% | 2408 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2288 | 39 | 226 | 53% | 2265 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2082 | 43 | 184 | 50% | 2076 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |