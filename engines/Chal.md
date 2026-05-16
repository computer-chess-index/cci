# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2365<sub>(+51) | 2603<sub>(+57) | 2689<sub>(+51) |  |
| 1.4.0 | 2026-04-01 | 2314<sub>(+221) | 2546<sub>(+132) | 2638<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2093<sub>(+32) | 2414<sub>(+26) | 2438<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2061<sub>(+159) | 2388<sub>(+116) | 2437<sub>(+138) |  |
| 1.3.0 | 2026-03-08 | 1902<sub>(+196) | 2272<sub>(+321) | 2299<sub>(+248) |  |
| 1.2.1 | 2026-03-07 | 1706<sub>(+new) | 1951<sub>(+new) | 2051<sub>(+new) |  |
| 1.2.0 | 2026-03-05 |  |  |  |  |
| 1.1.0 | 2026-03-05 |  |  |  |  |
| 1.0.0 | 2026-03-05 |  |  |  |  |
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

Generated: 2026-05-16 06:23:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1700 --> 2700
  line "STC (8.0+0.08s)" [1706, 1902, 2061, 2093, 2314, 2365]
  line "STC (8.0+0.08s)" [1706, 1902, 2061, 2093, 2314, 2365]
  line "LTC (60.0+0.60s)" [1951, 2272, 2388, 2414, 2546, 2603]
  line "VLTC (2m24s+1.12s)" [2051, 2299, 2437, 2438, 2638, 2689]
  line "VLTC (2m24s+1.12s)" [2051, 2299, 2437, 2438, 2638, 2689]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2689 | 32 | 316 | 50% | 2682 | 36% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2603 | 32 | 322 | 49% | 2610 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2365 | 33 | 312 | 51% | 2360 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2638 | 30 | 360 | 50% | 2637 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2546 | 32 | 320 | 49% | 2552 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2314 | 31 | 360 | 52% | 2296 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2438 | 34 | 296 | 49% | 2448 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2414 | 32 | 312 | 51% | 2408 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2093 | 32 | 320 | 48% | 2110 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 37 | 244 | 51% | 2423 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2388 | 37 | 240 | 51% | 2380 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2061 | 40 | 212 | 52% | 2045 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2299 | 44 | 188 | 54% | 2264 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2272 | 41 | 204 | 55% | 2229 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1902 | 42 | 196 | 50% | 1901 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2051 | 39 | 254 | 50% | 2061 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1951 | 45 | 192 | 46% | 2022 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1706 | 44 | 200 | 47% | 1781 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |