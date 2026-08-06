# Engine: Cepimetheus

Author: George Bland

Home: https://github.com/mrgwbland/Cepimetheus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14.0.1 | 2026-08-02 | 2110<sub>(-41) | 2367<sub>(-58) | 2468<sub>(-63) |  |
| 14.0.0 | 2026-07-31 | 2151<sub>(+91) | 2425<sub>(+80) | 2531<sub>(+83) |  |
| 13.0.0 | 2026-07-23 | 2060<sub>(+96) | 2345<sub>(+163) | 2448<sub>(+104) |  |
| 12.0.0 | 2026-07-19 | 1964<sub>(+new) | 2182<sub>(+new) | 2344<sub>(+new) |  |
| 11.0.0 | 2026-07-08 |  |  |  |  |
| 10.0.0 | 2026-07-01 |  |  |  |  |
| 9.0.0 | 2026-06-24 |  |  |  |  |
| 8.0.1 | 2026-06-20 |  |  |  |  |
| 8.0.0 | 2026-06-18 |  |  |  |  |
| 7.2.0 | 2026-06-16 |  |  |  |  |
| 7.1.0 | 2026-06-12 |  |  |  |  |
| 7.0.0 | 2026-06-02 |  |  |  |  |
| 6.4.1 | 2026-05-28 |  |  |  |  |
| 6.4.0 | 2026-05-27 |  |  |  |  |
| 6.3.0 | 2026-05-24 |  |  |  |  |
| 6.2.0 | 2026-05-24 |  |  |  |  |
| 6.1.0 | 2026-05-21 |  |  |  |  |
| 6.0.1 | 2026-05-21 |  |  |  |  |
| 6.0.0 | 2026-05-21 |  |  |  |  |
| 5.1.0 | 2026-05-20 |  |  |  |  |
| 5.0.0 | 2026-05-16 |  |  |  |  |
| 4.3.1 | 2026-05-15 |  |  |  |  |
| 4.3.0 | 2026-05-13 |  |  |  |  |
| 4.2.1 | 2026-05-09 |  |  |  |  |
| 4.2.0 | 2026-05-08 |  |  |  |  |
| 4.1.0 | 2026-05-06 |  |  |  |  |
| 4.0.0 | 2026-05-06 |  |  |  |  |
| 3.2.1 | 2026-04-26 |  |  |  |  |
| 3.2.0 | 2026-04-26 |  |  |  |  |
| 3.1.0 | 2026-04-26 |  |  |  |  |
| 3.0.0 | 2026-04-24 |  |  |  |  |
| 2.2.0 | 2026-04-23 |  |  |  |  |
| 2.1.0 | 2026-04-15 |  |  |  |  |
| 2.0.0 | 2026-04-14 |  |  |  |  |
| 1.0.0 | 2026-04-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cepimetheus+<version>&body=###%20Engine%20name%0ACepimetheus%0A%0A###%20Version%0A14.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 08:24:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["12.0.0", "13.0.0", "14.0.0", "14.0.1"]
  y-axis "Elo Rating" 1900 --> 2600
  line "STC (8.0+0.08s)" [1964, 2060, 2151, 2110]
  line "STC (8.0+0.08s)" [1964, 2060, 2151, 2110]
  line "LTC (60.0+0.60s)" [2182, 2345, 2425, 2367]
  line "VLTC (2m24s+1.12s)" [2344, 2448, 2531, 2468]
  line "VLTC (2m24s+1.12s)" [2344, 2448, 2531, 2468]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2468 | 43 | 174 | 51% | 2456 | 34% |
| 14.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2367 | 42 | 190 | 53% | 2344 | 31% |
| 14.0.1 | STC <sub>(8.0+0.08s)</sub> | 2110 | 41 | 216 | 47% | 2134 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2531 | 36 | 256 | 48% | 2547 | 29% |
| 14.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 33 | 304 | 47% | 2457 | 28% |
| 14.0.0 | STC <sub>(8.0+0.08s)</sub> | 2151 | 37 | 256 | 50% | 2144 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 36 | 264 | 49% | 2457 | 25% |
| 13.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2345 | 40 | 224 | 50% | 2348 | 21% |
| 13.0.0 | STC <sub>(8.0+0.08s)</sub> | 2060 | 39 | 234 | 52% | 2040 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2344 | 40 | 216 | 51% | 2330 | 26% |
| 12.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2182 | 37 | 256 | 48% | 2190 | 25% |
| 12.0.0 | STC <sub>(8.0+0.08s)</sub> | 1964 | 44 | 186 | 52% | 1943 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |