# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2080<sub>(+67) | 2392<sub>(+164) | 2422<sub>(+118) |  |
| 0.2.3 | 2025-12-08 | 2013<sub>(+31) | 2228<sub>(-24) | 2304<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1982<sub>(+64) | 2252<sub>(+80) | 2288<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1918<sub>(-69) | 2172<sub>(-29) | 2307<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1987<sub>(+new) | 2201<sub>(+new) | 2358<sub>(+new) |  |
| 0.1-alpha | 2025-03-29 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-04 06:26:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1987, 1918, 1982, 2013, 2080]
  line "STC (8.0+0.08s)" [1987, 1918, 1982, 2013, 2080]
  line "LTC (60.0+0.60s)" [2201, 2172, 2252, 2228, 2392]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2288, 2304, 2422]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2288, 2304, 2422]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2422 | 27 | 484 | 51% | 2404 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2392 | 26 | 504 | 53% | 2364 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2080 | 28 | 458 | 49% | 2080 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2304 | 31 | 362 | 48% | 2322 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 31 | 376 | 51% | 2211 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2013 | 28 | 468 | 49% | 2020 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2288 | 53 | 128 | 53% | 2260 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2252 | 66 | 76 | 51% | 2249 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1982 | 59 | 104 | 49% | 1995 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2307 | 55 | 132 | 44% | 2383 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2172 | 64 | 88 | 46% | 2211 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1918 | 70 | 76 | 50% | 1918 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2358 | 56 | 116 | 52% | 2338 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2201 | 47 | 160 | 49% | 2213 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1987 | 59 | 100 | 54% | 1948 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |