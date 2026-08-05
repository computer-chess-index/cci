# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2280<sub>(+30) | 2557<sub>(+76) | 2637<sub>(+64) |  |
| 1.4.0 | 2026-04-01 | 2250<sub>(+213) | 2481<sub>(+132) | 2573<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2037<sub>(+28) | 2349<sub>(+26) | 2375<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2009<sub>(+153) | 2323<sub>(+112) | 2372<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1856<sub>(+186) | 2211<sub>(+309) | 2237<sub>(+238) |  |
| 1.2.1 | 2026-03-07 | 1670<sub>(+new) | 1902<sub>(+new) | 1999<sub>(+new) |  |
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

Generated: 2026-08-05 06:23:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1670, 1856, 2009, 2037, 2250, 2280]
  line "STC (8.0+0.08s)" [1670, 1856, 2009, 2037, 2250, 2280]
  line "LTC (60.0+0.60s)" [1902, 2211, 2323, 2349, 2481, 2557]
  line "VLTC (2m24s+1.12s)" [1999, 2237, 2372, 2375, 2573, 2637]
  line "VLTC (2m24s+1.12s)" [1999, 2237, 2372, 2375, 2573, 2637]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2637 | 26 | 458 | 52% | 2620 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 27 | 460 | 51% | 2554 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2280 | 28 | 436 | 48% | 2303 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2573 | 30 | 360 | 50% | 2572 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2481 | 32 | 320 | 49% | 2487 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2250 | 31 | 360 | 52% | 2233 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 34 | 296 | 49% | 2384 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2349 | 32 | 312 | 51% | 2344 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2037 | 32 | 320 | 48% | 2056 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 37 | 244 | 51% | 2358 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2323 | 37 | 240 | 51% | 2315 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2009 | 40 | 212 | 52% | 1993 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2237 | 44 | 188 | 54% | 2202 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2211 | 41 | 204 | 55% | 2168 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1856 | 42 | 196 | 50% | 1856 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1999 | 39 | 254 | 50% | 2009 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1902 | 45 | 192 | 46% | 1972 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1670 | 44 | 200 | 47% | 1743 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |