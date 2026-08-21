# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2083<sub>(+65) | 2400<sub>(+167) | 2429<sub>(+119) |  |
| 0.2.3 | 2025-12-08 | 2018<sub>(+29) | 2233<sub>(-24) | 2310<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1989<sub>(+64) | 2257<sub>(+79) | 2294<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1925<sub>(-69) | 2178<sub>(-28) | 2314<sub>(-50) |  |
| 0.2 | 2025-11-15 | 1994 | 2206 | 2364 |  |
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

Generated: 2026-08-21 06:27:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1994, 1925, 1989, 2018, 2083]
  line "STC (8.0+0.08s)" [1994, 1925, 1989, 2018, 2083]
  line "LTC (60.0+0.60s)" [2206, 2178, 2257, 2233, 2400]
  line "VLTC (2m24s+1.12s)" [2364, 2314, 2294, 2310, 2429]
  line "VLTC (2m24s+1.12s)" [2364, 2314, 2294, 2310, 2429]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2429 | 26 | 508 | 51% | 2410 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2400 | 26 | 526 | 53% | 2371 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2083 | 27 | 492 | 49% | 2079 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 31 | 362 | 48% | 2327 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 31 | 376 | 51% | 2218 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2018 | 28 | 468 | 49% | 2026 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2294 | 53 | 128 | 53% | 2265 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 66 | 76 | 51% | 2256 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1989 | 59 | 104 | 49% | 2002 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2314 | 55 | 132 | 44% | 2388 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2178 | 64 | 88 | 46% | 2217 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1925 | 70 | 76 | 50% | 1925 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2364 | 56 | 116 | 52% | 2344 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2206 | 47 | 160 | 49% | 2218 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1994 | 59 | 100 | 54% | 1953 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |