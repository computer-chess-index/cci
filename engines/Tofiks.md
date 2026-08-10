# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2175<sub>(+139) | 2423<sub>(+112) | 2468<sub>(+80) |  |
| 1.4.1 | 2026-04-11 | 2036<sub>(-39) | 2311<sub>(+29) | 2388<sub>(+13) |  |
| 1.4.0 | 2026-04-09 | 2075 | 2282 | 2375 |  |
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

Generated: 2026-08-10 07:07:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2075, 2036, 2175]
  line "STC (8.0+0.08s)" [2075, 2036, 2175]
  line "LTC (60.0+0.60s)" [2282, 2311, 2423]
  line "VLTC (2m24s+1.12s)" [2375, 2388, 2468]
  line "VLTC (2m24s+1.12s)" [2375, 2388, 2468]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2468 | 26 | 488 | 49% | 2473 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 26 | 480 | 51% | 2417 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2175 | 27 | 512 | 47% | 2195 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 33 | 292 | 50% | 2384 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 34 | 296 | 50% | 2310 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2036 | 34 | 302 | 51% | 2022 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 40 | 216 | 47% | 2402 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 39 | 226 | 53% | 2259 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2075 | 43 | 184 | 50% | 2070 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |