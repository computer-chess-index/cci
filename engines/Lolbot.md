# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2090<sub>(+70) | 2384<sub>(+151) | 2427<sub>(+117) |  |
| 0.2.3 | 2025-12-08 | 2020<sub>(+30) | 2233<sub>(-24) | 2310<sub>(+15) |  |
| 0.2.2 | 2025-11-29 | 1990<sub>(+64) | 2257<sub>(+78) | 2295<sub>(-19) |  |
| 0.2.1 | 2025-11-16 | 1926<sub>(-69) | 2179<sub>(-28) | 2314<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1995<sub>(+new) | 2207<sub>(+new) | 2365<sub>(+new) |  |
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

Generated: 2026-05-21 06:25:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1995, 1926, 1990, 2020, 2090]
  line "STC (8.0+0.08s)" [1995, 1926, 1990, 2020, 2090]
  line "LTC (60.0+0.60s)" [2207, 2179, 2257, 2233, 2384]
  line "VLTC (2m24s+1.12s)" [2365, 2314, 2295, 2310, 2427]
  line "VLTC (2m24s+1.12s)" [2365, 2314, 2295, 2310, 2427]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2427 | 29 | 404 | 51% | 2404 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 30 | 400 | 52% | 2364 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2090 | 31 | 366 | 51% | 2075 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 31 | 362 | 48% | 2329 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 31 | 376 | 51% | 2218 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2020 | 28 | 468 | 49% | 2028 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2295 | 53 | 128 | 53% | 2265 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 66 | 76 | 51% | 2256 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1990 | 59 | 104 | 49% | 2003 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2314 | 55 | 132 | 44% | 2388 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2179 | 64 | 88 | 46% | 2218 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1926 | 70 | 76 | 50% | 1926 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2365 | 56 | 116 | 52% | 2345 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2207 | 47 | 160 | 49% | 2219 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1995 | 59 | 100 | 54% | 1956 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |