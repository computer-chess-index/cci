# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2290<sub>(+38) | 2558<sub>(+75) | 2631<sub>(+57) |  |
| 1.4.0 | 2026-04-01 | 2252<sub>(+213) | 2483<sub>(+131) | 2574<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2039<sub>(+29) | 2352<sub>(+26) | 2376<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2010<sub>(+151) | 2326<sub>(+113) | 2375<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1859<sub>(+185) | 2213<sub>(+307) | 2240<sub>(+238) |  |
| 1.2.1 | 2026-03-07 | 1674<sub>(+new) | 1906<sub>(+new) | 2002<sub>(+new) |  |
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

Generated: 2026-06-16 06:23:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1674, 1859, 2010, 2039, 2252, 2290]
  line "STC (8.0+0.08s)" [1674, 1859, 2010, 2039, 2252, 2290]
  line "LTC (60.0+0.60s)" [1906, 2213, 2326, 2352, 2483, 2558]
  line "VLTC (2m24s+1.12s)" [2002, 2240, 2375, 2376, 2574, 2631]
  line "VLTC (2m24s+1.12s)" [2002, 2240, 2375, 2376, 2574, 2631]
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
  line "STC (8.0+0.08s)" [1674, 1859, 2010, 2039, 2252, 2290]
  line "STC (8.0+0.08s)" [1674, 1859, 2010, 2039, 2252, 2290]
  line "LTC (60.0+0.60s)" [1906, 2213, 2326, 2352, 2483, 2558]
  line "VLTC (2m24s+1.12s)" [2002, 2240, 2375, 2376, 2574, 2631]
  line "VLTC (2m24s+1.12s)" [2002, 2240, 2375, 2376, 2574, 2631]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2631 | 30 | 356 | 51% | 2616 | 35% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 30 | 368 | 51% | 2549 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2290 | 31 | 344 | 49% | 2295 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2574 | 30 | 360 | 50% | 2572 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2483 | 32 | 320 | 49% | 2488 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2252 | 31 | 360 | 52% | 2234 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 34 | 296 | 49% | 2387 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2352 | 32 | 312 | 51% | 2346 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2039 | 32 | 320 | 48% | 2057 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 37 | 244 | 51% | 2361 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2326 | 37 | 240 | 51% | 2318 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2010 | 40 | 212 | 52% | 1995 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2240 | 44 | 188 | 54% | 2205 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2213 | 41 | 204 | 55% | 2169 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1859 | 42 | 196 | 50% | 1859 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2002 | 39 | 254 | 50% | 2012 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 45 | 192 | 46% | 1975 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1674 | 44 | 200 | 47% | 1747 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |