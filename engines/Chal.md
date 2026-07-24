# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2286<sub>(+36) | 2556<sub>(+73) | 2635<sub>(+61) |  |
| 1.4.0 | 2026-04-01 | 2250<sub>(+213) | 2483<sub>(+133) | 2574<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2037<sub>(+28) | 2350<sub>(+27) | 2376<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2009<sub>(+153) | 2323<sub>(+112) | 2373<sub>(+136) |  |
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

Generated: 2026-07-24 06:23:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1670, 1856, 2009, 2037, 2250, 2286]
  line "STC (8.0+0.08s)" [1670, 1856, 2009, 2037, 2250, 2286]
  line "LTC (60.0+0.60s)" [1902, 2211, 2323, 2350, 2483, 2556]
  line "VLTC (2m24s+1.12s)" [1999, 2237, 2373, 2376, 2574, 2635]
  line "VLTC (2m24s+1.12s)" [1999, 2237, 2373, 2376, 2574, 2635]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2635 | 27 | 454 | 52% | 2620 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2556 | 27 | 440 | 50% | 2554 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2286 | 28 | 420 | 49% | 2294 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2574 | 30 | 360 | 50% | 2572 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2483 | 32 | 320 | 49% | 2488 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2250 | 31 | 360 | 52% | 2233 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 34 | 296 | 49% | 2385 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2350 | 32 | 312 | 51% | 2345 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2037 | 32 | 320 | 48% | 2055 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 37 | 244 | 51% | 2360 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2323 | 37 | 240 | 51% | 2317 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2009 | 40 | 212 | 52% | 1993 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2237 | 44 | 188 | 54% | 2202 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2211 | 41 | 204 | 55% | 2168 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1856 | 42 | 196 | 50% | 1855 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1999 | 39 | 254 | 50% | 2009 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1902 | 45 | 192 | 46% | 1972 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1670 | 44 | 200 | 47% | 1743 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |