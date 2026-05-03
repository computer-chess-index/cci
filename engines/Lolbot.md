# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2161<sub>(+98) | 2435<sub>(+151) | 2488<sub>(+124) |  |
| 0.2.3 | 2025-12-08 | 2063<sub>(+33) | 2284<sub>(-25) | 2364<sub>(+18) |  |
| 0.2.2 | 2025-11-29 | 2030<sub>(+67) | 2309<sub>(+80) | 2346<sub>(-21) |  |
| 0.2.1 | 2025-11-16 | 1963<sub>(-70) | 2229<sub>(-28) | 2367<sub>(-52) |  |
| 0.2 | 2025-11-15 | 2033<sub>(+new) | 2257<sub>(+new) | 2419<sub>(+new) |  |
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

Generated: 2026-05-03 07:39:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2033, 1963, 2030, 2063, 2161]
  line "STC (8.0+0.08s)" [2033, 1963, 2030, 2063, 2161]
  line "LTC (60.0+0.60s)" [2257, 2229, 2309, 2284, 2435]
  line "VLTC (2m24s+1.12s)" [2419, 2367, 2346, 2364, 2488]
  line "VLTC (2m24s+1.12s)" [2419, 2367, 2346, 2364, 2488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2488 | 32 | 344 | 51% | 2460 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 32 | 344 | 51% | 2422 | 24% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2161 | 34 | 310 | 53% | 2133 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2364 | 31 | 362 | 48% | 2383 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2284 | 31 | 376 | 51% | 2269 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2063 | 28 | 468 | 49% | 2071 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2346 | 53 | 128 | 53% | 2317 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 66 | 76 | 51% | 2307 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 2030 | 59 | 104 | 49% | 2044 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2367 | 55 | 132 | 44% | 2442 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 64 | 88 | 46% | 2268 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1963 | 70 | 76 | 50% | 1963 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 56 | 116 | 52% | 2399 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 47 | 160 | 49% | 2269 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2033 | 59 | 100 | 54% | 1993 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1-alpha |  |  |  |  |  |  |  |