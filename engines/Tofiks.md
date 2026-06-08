# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2183<sub>(+147) | 2414<sub>(+103) | 2481<sub>(+91) |  |
| 1.4.1 | 2026-04-11 | 2036<sub>(-39) | 2311<sub>(+28) | 2390<sub>(+15) |  |
| 1.4.0 | 2026-04-09 | 2075<sub>(+new) | 2283<sub>(+new) | 2375<sub>(+new) |  |
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

Generated: 2026-06-08 06:28:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2075, 2036, 2183]
  line "STC (8.0+0.08s)" [2075, 2036, 2183]
  line "LTC (60.0+0.60s)" [2283, 2311, 2414]
  line "VLTC (2m24s+1.12s)" [2375, 2390, 2481]
  line "VLTC (2m24s+1.12s)" [2375, 2390, 2481]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 30 | 364 | 50% | 2481 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2414 | 29 | 390 | 49% | 2418 | 32% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2183 | 29 | 420 | 47% | 2205 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2390 | 33 | 292 | 50% | 2385 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 34 | 296 | 50% | 2310 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2036 | 34 | 302 | 51% | 2024 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 40 | 216 | 47% | 2403 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2283 | 39 | 226 | 53% | 2259 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2075 | 43 | 184 | 50% | 2070 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |