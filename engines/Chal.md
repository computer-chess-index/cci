# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2282<sub>(+34) | 2560<sub>(+80) | 2634<sub>(+62) |  |
| 1.4.0 | 2026-04-01 | 2248<sub>(+214) | 2480<sub>(+132) | 2572<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2034<sub>(+27) | 2348<sub>(+26) | 2373<sub>(+2) |  |
| 1.3.1 | 2026-03-10 | 2007<sub>(+152) | 2322<sub>(+112) | 2371<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1855<sub>(+185) | 2210<sub>(+309) | 2236<sub>(+238) |  |
| 1.2.1 | 2026-03-07 | 1670<sub>(+new) | 1901<sub>(+new) | 1998<sub>(+new) |  |
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

Generated: 2026-07-16 06:23:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1670, 1855, 2007, 2034, 2248, 2282]
  line "STC (8.0+0.08s)" [1670, 1855, 2007, 2034, 2248, 2282]
  line "LTC (60.0+0.60s)" [1901, 2210, 2322, 2348, 2480, 2560]
  line "VLTC (2m24s+1.12s)" [1998, 2236, 2371, 2373, 2572, 2634]
  line "VLTC (2m24s+1.12s)" [1998, 2236, 2371, 2373, 2572, 2634]
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
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1670, 1855, 2007, 2034, 2248, 2282]
  line "STC (8.0+0.08s)" [1670, 1855, 2007, 2034, 2248, 2282]
  line "LTC (60.0+0.60s)" [1901, 2210, 2322, 2348, 2480, 2560]
  line "VLTC (2m24s+1.12s)" [1998, 2236, 2371, 2373, 2572, 2634]
  line "VLTC (2m24s+1.12s)" [1998, 2236, 2371, 2373, 2572, 2634]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2634 | 27 | 442 | 52% | 2618 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2560 | 27 | 432 | 51% | 2552 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2282 | 29 | 400 | 49% | 2291 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2572 | 30 | 360 | 50% | 2570 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2480 | 32 | 320 | 49% | 2485 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2248 | 31 | 360 | 52% | 2230 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 34 | 296 | 49% | 2383 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 32 | 312 | 51% | 2342 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2034 | 32 | 320 | 48% | 2053 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2371 | 37 | 244 | 51% | 2357 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 37 | 240 | 51% | 2314 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2007 | 40 | 212 | 52% | 1991 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2236 | 44 | 188 | 54% | 2201 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2210 | 41 | 204 | 55% | 2167 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1855 | 42 | 196 | 50% | 1855 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1998 | 39 | 254 | 50% | 2007 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1901 | 45 | 192 | 46% | 1971 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1670 | 44 | 200 | 47% | 1743 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |