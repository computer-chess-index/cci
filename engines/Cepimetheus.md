# Engine: Cepimetheus

Author: George Bland

Home: https://github.com/mrgwbland/Cepimetheus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 14.0.1 | 2026-08-02 | 2121<sub>(-30) | 2373<sub>(-49) | 2473<sub>(-57) |  |
| 14.0.0 | 2026-07-31 | 2151<sub>(+91) | 2422<sub>(+78) | 2530<sub>(+85) |  |
| 13.0.0 | 2026-07-23 | 2060<sub>(+96) | 2344<sub>(+164) | 2445<sub>(+103) |  |
| 12.0.0 | 2026-07-19 | 1964<sub>(+new) | 2180<sub>(+new) | 2342<sub>(+new) |  |
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

Generated: 2026-08-12 06:24:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["12.0.0", "13.0.0", "14.0.0", "14.0.1"]
  y-axis "Elo Rating" 1900 --> 2600
  line "STC (8.0+0.08s)" [1964, 2060, 2151, 2121]
  line "STC (8.0+0.08s)" [1964, 2060, 2151, 2121]
  line "LTC (60.0+0.60s)" [2180, 2344, 2422, 2373]
  line "VLTC (2m24s+1.12s)" [2342, 2445, 2530, 2473]
  line "VLTC (2m24s+1.12s)" [2342, 2445, 2530, 2473]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 34 | 286 | 51% | 2466 | 30% |
| 14.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2373 | 35 | 278 | 51% | 2373 | 28% |
| 14.0.1 | STC <sub>(8.0+0.08s)</sub> | 2121 | 39 | 236 | 49% | 2130 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2530 | 36 | 256 | 48% | 2545 | 29% |
| 14.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2422 | 33 | 304 | 47% | 2454 | 28% |
| 14.0.0 | STC <sub>(8.0+0.08s)</sub> | 2151 | 37 | 256 | 50% | 2144 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 36 | 264 | 49% | 2454 | 25% |
| 13.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2344 | 40 | 224 | 50% | 2346 | 21% |
| 13.0.0 | STC <sub>(8.0+0.08s)</sub> | 2060 | 39 | 234 | 52% | 2040 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2342 | 40 | 216 | 51% | 2329 | 26% |
| 12.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 37 | 256 | 48% | 2188 | 25% |
| 12.0.0 | STC <sub>(8.0+0.08s)</sub> | 1964 | 44 | 186 | 52% | 1944 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |