# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2327<sub>(+149) | 2587<sub>(+149) | 2689<sub>(+133) |  |
| 5.1.0 | 2026-03-01 | 2178<sub>(+30) | 2438<sub>(+3) | 2556<sub>(+118) |  |
| 5.0.0 | 2026-01-25 | 2148<sub>(+197) | 2435<sub>(+187) | 2438<sub>(+86) |  |
| 4.1.0 | 2025-12-14 | 1951<sub>(+50) | 2248<sub>(+77) | 2352<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1901 | 2171 | 2295 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:43:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1901, 1951, 2148, 2178, 2327]
  line "STC (8.0+0.08s)" [1901, 1951, 2148, 2178, 2327]
  line "LTC (60.0+0.60s)" [2171, 2248, 2435, 2438, 2587]
  line "VLTC (2m24s+1.12s)" [2295, 2352, 2438, 2556, 2689]
  line "VLTC (2m24s+1.12s)" [2295, 2352, 2438, 2556, 2689]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2689 | 31 | 318 | 52% | 2673 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2587 | 28 | 422 | 53% | 2557 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2327 | 31 | 352 | 48% | 2346 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2556 | 27 | 428 | 50% | 2561 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2438 | 29 | 376 | 51% | 2426 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2178 | 27 | 468 | 49% | 2179 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2438 | 42 | 196 | 51% | 2430 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 37 | 246 | 49% | 2439 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2148 | 34 | 290 | 50% | 2151 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2352 | 40 | 214 | 50% | 2357 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2248 | 40 | 222 | 51% | 2232 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1951 | 33 | 312 | 47% | 1976 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2295 | 46 | 172 | 41% | 2403 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 55 | 116 | 47% | 2199 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1901 | 62 | 92 | 47% | 1926 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |