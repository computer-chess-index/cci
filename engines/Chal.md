# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2282<sub>(+23) | 2562<sub>(+74) | 2645<sub>(+65) |  |
| 1.4.0 | 2026-04-01 | 2259<sub>(+214) | 2488<sub>(+132) | 2580<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2045<sub>(+28) | 2356<sub>(+26) | 2381<sub>(+2) |  |
| 1.3.1 | 2026-03-10 | 2017<sub>(+153) | 2330<sub>(+111) | 2379<sub>(+134) |  |
| 1.3.0 | 2026-03-08 | 1864<sub>(+185) | 2219<sub>(+309) | 2245<sub>(+238) |  |
| 1.2.1 | 2026-03-07 | 1679 | 1910 | 2007 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:23:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2045, 2259, 2282]
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2045, 2259, 2282]
  line "LTC (60.0+0.60s)" [1910, 2219, 2330, 2356, 2488, 2562]
  line "VLTC (2m24s+1.12s)" [2007, 2245, 2379, 2381, 2580, 2645]
  line "VLTC (2m24s+1.12s)" [2007, 2245, 2379, 2381, 2580, 2645]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2645 | 26 | 478 | 52% | 2627 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 26 | 482 | 50% | 2561 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2282 | 27 | 460 | 48% | 2307 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2580 | 30 | 360 | 50% | 2579 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2488 | 32 | 320 | 49% | 2493 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2259 | 31 | 360 | 52% | 2241 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2381 | 34 | 296 | 49% | 2391 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2356 | 32 | 312 | 51% | 2350 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2045 | 32 | 320 | 48% | 2063 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2379 | 37 | 244 | 51% | 2365 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2330 | 37 | 240 | 51% | 2322 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2017 | 40 | 212 | 52% | 2001 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2245 | 44 | 188 | 54% | 2210 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2219 | 41 | 204 | 55% | 2176 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1864 | 42 | 196 | 50% | 1864 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2007 | 39 | 254 | 50% | 2017 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 45 | 192 | 46% | 1980 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1679 | 44 | 200 | 47% | 1752 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |