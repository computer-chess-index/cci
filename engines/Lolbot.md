# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2076<sub>(+66) | 2384<sub>(+159) | 2419<sub>(+116) |  |
| 0.2.3 | 2025-12-08 | 2010<sub>(+30) | 2225<sub>(-25) | 2303<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1980<sub>(+62) | 2250<sub>(+79) | 2287<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1918<sub>(-68) | 2171<sub>(-28) | 2307<sub>(-51) |  |
| 0.2 | 2025-11-15 | 1986<sub>(+new) | 2199<sub>(+new) | 2358<sub>(+new) |  |
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

Generated: 2026-07-16 06:26:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1986, 1918, 1980, 2010, 2076]
  line "STC (8.0+0.08s)" [1986, 1918, 1980, 2010, 2076]
  line "LTC (60.0+0.60s)" [2199, 2171, 2250, 2225, 2384]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2287, 2303, 2419]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2287, 2303, 2419]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1986, 1918, 1980, 2010, 2076]
  line "STC (8.0+0.08s)" [1986, 1918, 1980, 2010, 2076]
  line "LTC (60.0+0.60s)" [2199, 2171, 2250, 2225, 2384]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2287, 2303, 2419]
  line "VLTC (2m24s+1.12s)" [2358, 2307, 2287, 2303, 2419]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 27 | 468 | 51% | 2403 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 27 | 476 | 52% | 2363 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2076 | 28 | 438 | 49% | 2080 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2303 | 31 | 362 | 48% | 2321 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2225 | 31 | 376 | 51% | 2210 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2010 | 28 | 468 | 49% | 2018 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2287 | 53 | 128 | 53% | 2257 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2250 | 66 | 76 | 51% | 2248 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1980 | 59 | 104 | 49% | 1994 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2307 | 55 | 132 | 44% | 2381 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 64 | 88 | 46% | 2210 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1918 | 70 | 76 | 50% | 1917 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2358 | 56 | 116 | 52% | 2338 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2199 | 47 | 160 | 49% | 2211 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 1986 | 59 | 100 | 54% | 1947 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |